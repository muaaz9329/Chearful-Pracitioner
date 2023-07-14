
const useSessionHistory = (Sessions) => {
    const SessionHistory = {
        UpcomingSession:[],
        PastSession:[],
    }
    Sessions.map((session) => {
        if (session.status == "accepted") {
            SessionHistory.UpcomingSession.push(session)
        } else {
            SessionHistory.PastSession.push(session)
        }
    });
    return SessionHistory
}

export default useSessionHistory;