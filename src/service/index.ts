import { request } from '@octokit/request'
import { OctokitResponse } from '@octokit/types'
import * as dayjs from 'dayjs'

import {
  TRepositoryActivityResponse,
  TRepositoryResponse,
  TResponse,
} from './types.ts'

const requestWithAuth = request.defaults({
  headers: {
    authorization:
      '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',
  },
})

const getRepositories = async (search: string) => {
  const res: OctokitResponse<TResponse> = await requestWithAuth(
    `GET /search/repositories?q=${search}`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github+json',
      },
    }
  )

  return res.data.items
    .map((item: TRepositoryResponse) => {
      return {
        id: item.id,
        repoOwner: item.owner.login,
        repoName: item.name,
        stargazersCount: item.stargazers_count,
        updatedAt: item.updated_at,
      }
    })
    .slice(0, 9)
}

const getRepoActivity = async (repoOwner: string, repoName: string) => {
  const res: OctokitResponse<TRepositoryActivityResponse[]> =
    await requestWithAuth(
      `GET /repos/${repoOwner}/${repoName}/stats/commit_activity`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          accept: 'application/vnd.github+json',
        },
      }
    )

  if (!Array.isArray(res.data)) {
    return []
  }

  return res.data.map((item) => ({
    week: 'Week of ' + dayjs(item.week * 1000).format('MMM DD, YYYY'),
    [repoOwner + '/' + repoName]: item.total,
  }))
}

export { getRepositories, getRepoActivity }
