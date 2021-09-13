declare namespace LEAGUE {
  export const enum CEF_RPC {
    /** This event is invoked by cef to request a player's profile */
    GAMEMENU_PROFILE              = 'cef_rpc.gamemenu.profile',
    /** This event is invoked by cef to request players */
    GAMEMENU_PLAYERS              = 'cef_rpc.gamemenu.players',
    /** This event is invoked by cef to request a players history */
    GAMEMENU_HISTORY              = 'cef_rpc.gamemenu.history',
    /** This event is invoked by cef to request maps */
    GAMEMENU_VOTE                 = 'cef_rpc.gamemenu.vote',
    /** This event is invoked by cef to nominate a map */
    GAMEMENU_VOTE_NOMINATE        = 'cef_rpc.gamemenu.vote.nominate',
    /** This event is invoked by cef to request a top of players */
    GAMEMENU_TOP                  = 'cef_rpc.gamemenu.top',
    /** This event is invoked by cef to request credits info */
    GAMEMENU_CREDITS              = 'cef_rpc.gamemenu.credits',
    /** This event invokes when the dialog is opened */
    DIALOG_OPEN                   = 'cef_rpc.dialog.open',
    /** This event invokes when the dialog is closed */
    DIALOG_CLOSE                  = 'cef_rpc.dialog.close',
    /** @todo change CLIENT to CEF for cef call rpcs */
    /** This event is invoked by clientside when the client should render a weapon dialog */
    WEAPON_DIALOG_OPEN            = 'cef_rpc.weapon_dialog.open',
    /** This event is invoked by clientside when the client should stop render a weapon dialog */
    WEAPON_DIALOG_CLOSE           = 'cef_rpc.weapon_dialog.close',
    /** This event is invoked by clientside when the client should or should stop render a scoreboard dialog */
    SCOREBOARD_TOGGLE             = 'cef_rpc.scoreboard.toggle',
    /** This event is invoked by clientside when the client should or should stop render a top info panel */
    INFOPANEL_TOGGLE              = 'cef_rpc.infopanel.toggle',
    /** This event is invoked by clientside to send a mesage into cef */
    NOTIFY_NOTISTACK              = 'cef_rpc.notify.notistack',
    /** This event is invoked by clientside when the client is toggling gamemenu */
    GAMEMENU_TOGGLE               = 'cef_rpc.gamemenu.toggle',
    /** This event is invoked by clientside to send a message about round ending into cef */
    NOTIFY_ROUND_END              = 'cef_rpc.notify.round_end',
    /** This event is invoked by clientside to send a message about a player's death into cef */
    NOTIFY_DEATH                  = 'cef_rpc.notify.death',
    /** This event is invoked by clientside to toggle spectate info panel */
    SPECTATE_CURRENT              = 'cef_rpc.spectate.current',
    /** This event is invoked by clientside to update data in spectate info panel */
    SPECTATE_CURRENT_TOGGLE       = 'cef_rpc.spectate.current_toggle',
    /** This event is invoked by clientside to toggle spectate current viewers */
    SPECTATE_VIEWERS              = 'cef_rpc.spectate.viewers',
    /** This event is invoked by clientside to update data in spectate viewers panel*/
    SPECTATE_VIEWERS_TOGGLE       = 'cef_rpc.spectate.viewers_toggle',
    /** This event is invoked by clientside to show controls hud */
    CONTROLS_TOGGLE               = 'cef_rpc.controls.toggle',
    /** This event is invoked by clientside to toggle map editor */
    MAP_EDITOR_TOGGLE             = 'cef_rpc.map_editor.toggle',
    /** This event is invoked by clientside to update map editor state */
    MAP_EDITOR_UPDATE             = 'cef_rpc.map_editor.update',
    /** This event is invoked by CEF to place a point on the radar */
    MAP_EDITOR_ADD_POINT          = 'cef_rpc.map_editor.add_point',
    /** This event is invoked by CEF to remove a point on the radar */
    MAP_EDITOR_REMOVE_POINT       = 'cef_rpc.map_editor.remove_point',
    /** This event is invoked by CEF to place a spawn point on the radar */
    MAP_EDITOR_ADD_SPAWN_POINT    = 'cef_rpc.map_editor.add_spawnpoint',
    /** This event is invoked by CEF to remove a spawn point on the radar */
    MAP_EDITOR_REMOVE_SPAWN_POINT = 'cef_rpc.map_editor.remove_spawnpoint',
    /** This event is invoked by CEF to start a map editor */
    MAP_EDITOR_START              = 'cef_rpc.map_editor.start',
    /** This event is invoked by CEF to stop a map editor */
    MAP_EDITOR_STOP               = 'cef_rpc.map_editor.stop',
    /** This event is invoked by CEF to reset a map editor data */
    MAP_EDITOR_RESET              = 'cef_rpc.map_editor.reset',
    /** This event is invoked by CEF to save a map editor data */
    MAP_EDITOR_SAVE               = 'cef_rpc.map_editor.save',
    /** This event is invoked by CEF to update a map editor state */
    MAP_EDITOR_UPDATE_CLIENT      = 'cef_rpc.map_editor.update_client',
  }
}