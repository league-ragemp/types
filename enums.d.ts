declare namespace League {
  /** The player's states of the game */
  const enum State {
    IDLE,
    ALIVE,
    DEAD,
    SELECT,
    SPECTATE,
  }

  /** Player's teams */
  const enum Teams {
    ATTACKERS   = "ATTACKERS",
    DEFENDERS   = "DEFENDERS",
    SPECTATORS  = "SPECTATORS",
  }

  /** Shared entities */
  const enum Entities {
    CONFIG,
    MAP,
    PLAYER_STAT,
    ROUND_STAT,
    LANGUAGE
  }

  /** User groups */
  const enum Group {
    ROOT,
    ADMIN,
    MODERATOR,
    USER = 99,
  }
}