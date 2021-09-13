declare namespace LEAGUE {
  export const enum SERVER_EVENTS {
    /** This event is invoked by serverside to draw a zone on minimap on clientside */
    MAP_DRAW                   = 'server_events.map.draw',
    /** This event is invoked by serverside to stop drawing a zone on minimap on clientside */
    MAP_CLEAR                  = 'server_events.map.clear',
    /** This event is invoked by serverside when players should prepare for the round start */
    ROUND_PREPARE              = 'server_events.round.prepare',
    /** This event is invoked by serverside when round starts */
    ROUND_START                = 'server_events.round.start',
    /** This event is invoked by serverside when round ends */
    ROUND_END                  = 'server_events.round.end',
    /** This event is invoked by serverside when a player is added to the round */
    ROUND_PLAYER_ADD           = 'server_events.round.player_add',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_REMOVE        = 'server_events.round.player_remove',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_DEATH         = 'server_events.round.player_death',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_KILL          = 'server_events.round.player_kill',
    /** This event is invoked by serverside when round is paused or unpaused */
    ROUND_PAUSE                = 'server_events.round.pause',
    /** This event is invoked by serverside to update a team score */
    ROUND_TEAMSCORE            = 'server_events.round.teamscore',
    /** This event is invoked by serverside when round is running and player has joined to the server */
    ROUND_PlAYER_JOIN          = 'server_events.round.player_join',
    /** This event is invoked by serverside when the player is ready to play */
    PLAYER_READY               = 'server_events.player.ready',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN               = 'server_events.player.login',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN_SUCCESS       = 'server_events.player.login_success',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN_FAILURE       = 'server_events.player.login_failure',
    /** This event is invoked by serverside to notify player */
    NOTIFY                     = 'server_events.player.notify',
    /** This event is invoked by serverside to notify player */
    NOTIFY_CHAT                = 'server_events.player.notify_chat',
    /** This event is invoked by serverside to notify player errors */
    NOTIFY_ERROR               = 'server_events.player.notify_error',
    /** This event is invoked by serverside to notify player that vote has started */
    VOTEMAP_START              = 'server_events.votemap.start',
    /** This event is invoked by serverside to update state of nominated maps */
    VOTEMAP_UPDATE             = 'server_events.votemap.update',
    /** This event is invoked by serverside to add a new deathlog */
    DEATHLOG                   = 'server_events.server.deathlog',
    /** This event is invoked by serverside to notify a player about a damage */
    DAMAGE_NOTIFY              = 'server_events.damage.notify',
    /** This event is invoked by serverside for spectating to a player */
    PLAYER_SPECTATE            = 'server_events.player.spectate',
    /** This event is invoked by serverside to refresh dummy for a player */
    REFRESH_DUMMY              = 'server_events.dummy.refresh',
    /** This event is invoked by serverside when a player has tried to add a new map */
    MAP_EDITOR_ADD_RESULT      = 'server_events.map_editor.add_result',
    /** This event is invoked by serverside to toggle map editor */
    MAP_EDITOR_TOGGLE          = 'server_events.map_editor.toggle',
  }
}