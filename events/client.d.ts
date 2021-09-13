declare namespace League {
  export const enum ClientEvent {
    /** This event is invoked by clientside to change shared data on server */
    SET_SHARED_DATA            = 'client_event.shared_data.set',
    /** This event is invoked by clientside to change player data on server */
    SET_PLAYER_DATA            = 'client_event.player_data.set',
    /** This event is invoked by clientside when the all dummies are registred */
    DUMMIES_READY              = 'client_event.dummies.ready',
    /** This event is invoked by clientside to spawn in lobby */
    SPAWN_IN_LOBBY             = 'client_event.spawn.lobby',
    /** This event is invoked by clientside to update round stat*/
    ROUND_STAT_UPDATE          = 'client_event.roundstat.update',
    /** This event is invoked by clientside to update round stat assist */
    ASSIST_UPDATE              = 'client_event.roundstat.update_assist',
    /** This event is invoked by clientside when client browser is ready */
    BROWSER_READY              = 'client_event.browser.ready',
    /** This event is invoked by clientside to notify a player about outcoming damage by player id */
    DAMAGE_REQUEST_NOTIFY      = 'client_event.damage.request',
    /** This event is invoked by clientside to notify that player is dead */
    PLAYER_DEATH               = 'client_event.player.death',
    /** This event is invoked by clientside when a player wants to add a new map */
    MAP_EDITOR_ADD_MAP         = 'client_event.map_editor.add_map',
  }
}