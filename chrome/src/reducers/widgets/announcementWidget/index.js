import { createAction, handleActions } from 'redux-actions';

const initialState = {
  unread: true,
  allAnnouncements: [{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: true
                  },{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: false
                  },{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: false
                  },{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: false
                  },{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: false
                  },{
                    title: "Koru Retreat",
                    timestamp: "11-34-2016",
                    contents: "I write to let you know about our first Koru Retreat!  " +
                    "It will be a half-day silent meditation retreat on Saturday, October " +
                    "15th from 1-5pm at Yale Health, co-taught by Koru teacher Jen Mendelsohn ",
                    unread: false
                  }],
};

export const LOAD_ANNOUNCEMENTS = 'LOAD_ANNOUNCEMENTS';
export const MARK_ANNOUNCEMENT_AS_READ = 'MARK_ANNOUNCEMENT_AS_READ';

export const loadAnnouncements = createAction(LOAD_ANNOUNCEMENTS);
export const markAnnouncementAsRead = createAction(MARK_ANNOUNCEMENT_AS_READ);

export default handleActions({
  LOAD_ANNOUNCEMENTS: (state, { payload }) => {
    return { ...state, };
  },
}, initialState);
