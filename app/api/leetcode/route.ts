import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "dhirajgupta1234567";

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = await res.json();

    const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    const ranking = data.data.matchedUser.profile.ranking;

    return NextResponse.json({ stats, ranking });
  } catch (error) {
    console.error("LeetCode API Error:", error);
    return NextResponse.json({ error: "Failed to fetch LeetCode stats" }, { status: 500 });
  }
}
