declare namespace League {
  export const enum ServerEvent {
    /** This event is invoked by serverside to draw a zone on minimap on clientside */
    MAP_DRAW                   = 'server_event.map.draw',
    /** This event is invoked by serverside to stop drawing a zone on minimap on clientside */
    MAP_CLEAR                  = 'server_event.map.clear',
    /** This event is invoked by serverside when players should prepare for the round start */
    ROUND_PREPARE              = 'server_event.round.prepare',
    /** This event is invoked by serverside when round starts */
    ROUND_START                = 'server_event.round.start',
    /** This event is invoked by serverside when round ends */
    ROUND_END                  = 'server_event.round.end',
    /** This event is invoked by serverside when a player is added to the round */
    ROUND_PLAYER_ADD           = 'server_event.round.player_add',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_REMOVE        = 'server_event.round.player_remove',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_DEATH         = 'server_event.round.player_death',
    /** This event is invoked by serverside when a player is removed from the round */
    ROUND_PLAYER_KILL          = 'server_event.round.player_kill',
    /** This event is invoked by serverside when round is paused or unpaused */
    ROUND_PAUSE                = 'server_event.round.pause',
    /** This event is invoked by serverside to update a team score */
    ROUND_TEAMSCORE            = 'server_event.round.teamscore',
    /** This event is invoked by serverside when round is running and player has joined to the server */
    ROUND_PlAYER_JOIN          = 'server_event.round.player_join',
    /** This event is invoked by serverside when the player is ready to play */
    PLAYER_READY               = 'server_event.player.ready',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN               = 'server_event.player.login',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN_SUCCESS       = 'server_event.player.login_success',
    /** This event is invoked by serverside when the player should logIn */
    PLAYER_LOGIN_FAILURE       = 'server_event.player.login_failure',
    /** This event is invoked by serverside to notify player */
    NOTIFY                     = 'server_event.player.notify',
    /** This event is invoked by serverside to notify player */
    NOTIFY_CHAT                = 'server_event.player.notify_chat',
    /** This event is invoked by serverside to notify player errors */
    NOTIFY_ERROR               = 'server_event.player.notify_error',
    /** This event is invoked by serverside to notify player that vote has started */
    VOTEMAP_START              = 'server_event.votemap.start',
    /** This event is invoked by serverside to update state of nominated maps */
    VOTEMAP_UPDATE             = 'server_event.votemap.update',
    /** This event is invoked by serverside to add a new deathlog */
    DEATHLOG                   = 'server_event.server.deathlog',
    /** This event is invoked by serverside to notify a player about a damage */
    DAMAGE_NOTIFY              = 'server_event.damage.notify',
    /** This event is invoked by serverside for spectating to a player */
    PLAYER_SPECTATE            = 'server_event.player.spectate',
    /** This event is invoked by serverside to refresh dummy for a player */
    REFRESH_DUMMY              = 'server_event.dummy.refresh',
    /** This event is invoked by serverside when a player has tried to add a new map */
    MAP_EDITOR_ADD_RESULT      = 'server_event.map_editor.add_result',
    /** This event is invoked by serverside to toggle map editor */
    MAP_EDITOR_TOGGLE          = 'server_event.map_editor.toggle',
  }
}