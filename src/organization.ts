
/**
 * Organization ids (the sport / league)
 */
export const ORGANIZATION_ID = {
  CFB: 'f1dedce6-3b4c-11ef-94bc-2a93761010b8',
  CBB: 'f1c37c98-3b4c-11ef-94bc-2a93761010b8',
  NBA: 'd36a29dc-5453-11f1-8ce7-46e166b0a263',
} as const;

export type OrganizationID = typeof ORGANIZATION_ID[keyof typeof ORGANIZATION_ID];

/**
 * The current season for each organization.
 * Rolling to a new season is a change here + a version bump of this package.
 */
export const CURRENT_SEASON: Record<OrganizationID, number> = {
  [ORGANIZATION_ID.CFB]: 2027,
  [ORGANIZATION_ID.CBB]: 2026,
  [ORGANIZATION_ID.NBA]: 2027,
};

/**
 * Helpers for organization ids. Everything takes the organization_id, nothing here depends on app state.
 */
export class Organization {
  public static getCFBID(): string {
    return ORGANIZATION_ID.CFB;
  }

  public static getCBBID(): string {
    return ORGANIZATION_ID.CBB;
  }

  public static getNBAID(): string {
    return ORGANIZATION_ID.NBA;
  }

  public static isCFB(organization_id: string | null | undefined): boolean {
    return organization_id === ORGANIZATION_ID.CFB;
  }

  public static isCBB(organization_id: string | null | undefined): boolean {
    return organization_id === ORGANIZATION_ID.CBB;
  }

  public static isNBA(organization_id: string | null | undefined): boolean {
    return organization_id === ORGANIZATION_ID.NBA;
  }

  /**
   * CBB and NBA
   */
  public static isBasketball(organization_id: string | null | undefined): boolean {
    return Organization.isCBB(organization_id) || Organization.isNBA(organization_id);
  }

  /**
   * CFB
   */
  public static isFootball(organization_id: string | null | undefined): boolean {
    return Organization.isCFB(organization_id);
  }

  /**
   * The current season of the organization, null if it is not a known organization
   */
  public static getCurrentSeason(organization_id: string | null | undefined): number | null {
    if (organization_id && organization_id in CURRENT_SEASON) {
      return CURRENT_SEASON[organization_id as OrganizationID];
    }

    return null;
  }

  public static getSportText(organization_id: string | null | undefined): string {
    if (Organization.isCBB(organization_id)) {
      return 'college basketball';
    }

    if (Organization.isCFB(organization_id)) {
      return 'college football';
    }

    if (Organization.isNBA(organization_id)) {
      return 'NBA';
    }

    return '';
  }

  public static getEmoji(organization_id: string | null | undefined): string {
    if (Organization.isFootball(organization_id)) {
      return '🏈';
    }

    if (Organization.isBasketball(organization_id)) {
      return '🏀';
    }

    return '';
  }
}
