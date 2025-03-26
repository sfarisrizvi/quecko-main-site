import { formatDistanceToNow } from "date-fns/formatDistanceToNow";


export const getTimeInAges = (time) => {
    const lastUpdated = time
        ? formatDistanceToNow(new Date(time), { addSuffix: true })
            .replace("about ", "")
            .replace("over ", "")
            .replace("almost ", "")
            .replace("less than a", "")
           
        : "Unknown time";
    return lastUpdated
}
