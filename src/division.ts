
/**
 * Division ids (FBS / FCS for football, D1 - D3 for basketball, D2 is shared)
 */
export const DIVISION_ID = {
  FBS: 'bf258a3f-3b4a-11ef-94bc-2a93761010b8',
  FCS: 'bf4a4dac-3b4a-11ef-94bc-2a93761010b8',
  D1: 'bf602dc4-3b4a-11ef-94bc-2a93761010b8',
  D2: 'bf891a3f-3b4a-11ef-94bc-2a93761010b8',
  D3: 'bf9ea506-3b4a-11ef-94bc-2a93761010b8',
  NBA: 'b5cbe40e-5454-11f1-8ce7-46e166b0a263',
} as const;

export type DivisionID = typeof DIVISION_ID[keyof typeof DIVISION_ID];

/**
 * Helpers for division ids. Everything takes the division_id, nothing here depends on app state.
 */
export class Division {
  public static getFBS(): string {
    return DIVISION_ID.FBS;
  }

  public static getFCS(): string {
    return DIVISION_ID.FCS;
  }

  public static getD1(): string {
    return DIVISION_ID.D1;
  }

  public static getD2(): string {
    return DIVISION_ID.D2;
  }

  public static getD3(): string {
    return DIVISION_ID.D3;
  }

  public static getNBA(): string {
    return DIVISION_ID.NBA;
  }

  public static isFBS(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.FBS;
  }

  public static isFCS(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.FCS;
  }

  public static isD1(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.D1;
  }

  public static isD2(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.D2;
  }

  public static isD3(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.D3;
  }

  public static isNBA(division_id: string | null | undefined): boolean {
    return division_id === DIVISION_ID.NBA;
  }
}
