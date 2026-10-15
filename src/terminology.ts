
/**
 * Terminology ids that the code checks against, grouped by what they are the type of
 */
export const TERMINOLOGY_ID = {
  GAME_TYPE: {
    PRESEASON: '068b22b0-5623-11f1-8ce7-46e166b0a263',
  },
  FANTASY_GROUP_TYPE: {
    DRAFT: '7ca1ccce-e033-11f0-bc34-529c3ffdbb93',
    NCAA_BRACKET: '3e72a9f3-e034-11f0-bc34-529c3ffdbb93',
  },
  DRAFT_TYPE: {
    SNAKE: '443459f0-eefe-11f0-a514-529c3ffdbb93',
    FREE_FOR_ALL: '782f9c90-e11f-11f0-bc34-529c3ffdbb93',
  },
  DRAFT_SCORING: {
    ROTO: 'b969c141-e145-11f0-bc34-529c3ffdbb93',
    EFFICIENCY_RATING: 'b946ba00-e145-11f0-bc34-529c3ffdbb93',
    FANTASY_POINTS: 'b9585eea-e145-11f0-bc34-529c3ffdbb93',
  },
  COMMENT_TYPE: {
    SYSTEM: '927fb358-e9b5-11f0-bc34-529c3ffdbb93',
    USER: '92922f1c-e9b5-11f0-bc34-529c3ffdbb93',
  },
} as const;
