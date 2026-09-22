# @srating-io/common

Shared constants and helpers for srating.io. Types live in `@srating-io/types`, this package is for runtime values.

- `ORGANIZATION_ID`, `CURRENT_SEASON`, `Organization`: organization (sport) ids, the current season of each, and helpers (`isCBB(organization_id)`, `isBasketball(organization_id)`, `getCurrentSeason(organization_id)`, `getSportText(organization_id)`...)
- `DIVISION_ID`, `Division`: division ids and helpers (`isFBS(division_id)`...)
- `TERMINOLOGY_ID`: terminology ids the code checks against (game types, fantasy group types, comment types)

```ts
import { ORGANIZATION_ID, DIVISION_ID, Organization } from '@srating-io/common';

if (Organization.isBasketball(organization_id)) {
  // ...
}
```

Nothing in here depends on app state, everything takes the id as an argument.

## New season

Update `CURRENT_SEASON` in `src/organization.ts`, bump the version, publish, then update the dependency in the projects.

## Publish

```sh
npm install
npm publish
```
