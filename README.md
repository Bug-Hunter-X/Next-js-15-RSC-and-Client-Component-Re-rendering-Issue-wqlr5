# Next.js 15 RSC and Client Component Re-rendering Issue

This repository demonstrates a bug in Next.js 15 App Router where client components don't re-render correctly when data changes in a React Server Component (RSC).

## Bug Description

The issue arises when using RSCs to fetch data and pass it down to client components. When the server data updates, the client components are expected to re-render, but they sometimes fail to do so. This leads to stale data being displayed on the client.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the client component doesn't update when the server-side data changes.

## Expected Behavior

Client components should re-render automatically whenever data from the server changes.

## Actual Behavior

Client components often fail to re-render and display stale data.

## Solution

The solution involves using React's built-in `useState` hook along with useEffect to force a re-render on data changes, in the client component, or employing a suspense mechanism on the server side.