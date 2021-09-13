declare namespace League {
  export const enum ClientRpc {
    /** This event is invoked by clientside to give player weapons */
    WEAPON_REQUEST             = 'client_rpc.weapon.request',
    /** This event is invoked by clientside to pass params into CEF console.log */
    CONSOLE                    = 'client_rpc.console',
    /** This event is invoked by clientside to set up the new language */
    LANGUAGE                   = 'client_rpc.language',
    /** This event is invoked by clientside to set up new scoreboard data */
    SCOREBOARD_DATA            = 'client_rpc.scoreboard.data',
    /** This event is invoked by clientside to getting ping players */
    PING_REQUEST               = 'client_rpc.ping.request',
    /** This event is invoked by clientside to set up new infopanel data */
    INFOPANEL_DATA             = 'client_rpc.infopanel.data',
    /** This event is invoked by clientside to CEF to add a new deathlog */
    DEATHLOG                   = 'client_rpc.client.deathlog',
    /** This event is invoked by clientside to get a player's position from the serverside */
    PLAYER_POSITION            = 'client_rpc.player.position',
    /** This event is invoked by clientside to set a player's data */
    PLAYER_SET_DATA            = 'client_rpc.player.set_data',
  }
}