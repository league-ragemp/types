declare namespace LEAGUE {
  /** The player's states of the game */
  export const enum STATE {
    IDLE,
    ALIVE,
    DEAD,
    SELECT,
    SPECTATE,
  }

  /** Player's teams */
  export const enum TEAMS {
    ATTACKERS   = "ATTACKERS",
    DEFENDERS   = "DEFENDERS",
    SPECTATORS  = "SPECTATORS",
  }

  /** Shared entities */
  export const enum ENTITIES {
    CONFIG,
    MAP,
    PLAYER_STAT,
    ROUND_STAT,
    LANGUAGE
  }

  /** User groups */
  export const enum GROUP {
    ROOT,
    ADMIN,
    MODERATOR,
    USER = 99,
  }
}