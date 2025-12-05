
export async function fetchGitHubContributions() {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

    if (!token) {
        throw new Error("GitHub token not found")
    }

    const query = `
    query {
      viewer {
        login
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch GitHub data: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.errors) {
        console.error("GitHub GraphQL errors:", data.errors)
        throw new Error("Failed to fetch GitHub data: GraphQL error")
    }

    return data.data.viewer.contributionsCollection.contributionCalendar
}
