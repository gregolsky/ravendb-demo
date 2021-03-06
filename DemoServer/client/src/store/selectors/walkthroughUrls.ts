import { createSelector } from "reselect";

import {
    selectWalkthroughs,
    selectFirstWalkthrough,
    selectPreviousWalkthrough,
    selectNextWalkthrough
} from "./walkthroughs";

import { getDemoSlugs, getWalkthroughUrl } from "./urlGetters";
import { createDemoWithoutWalkthroughPath } from "../../utils/paths";

export const selectFirstWalkthroughUrl = createSelector(
    [getDemoSlugs, selectFirstWalkthrough],
    (demoSlugs, firstWt) => firstWt ? getWalkthroughUrl(demoSlugs, firstWt) : null
);

export const selectPreviousWalkthroughUrl = createSelector(
    [getDemoSlugs, selectPreviousWalkthrough],
    (demoSlugs, previousWt) => previousWt ? getWalkthroughUrl(demoSlugs, previousWt) : null
);

export const selectWalkthroughUrls = createSelector(
    [getDemoSlugs, selectWalkthroughs],
    (demoSlugs, wts): string[] => wts.map(x => getWalkthroughUrl(demoSlugs, x))
);

export const selectNextWalkthroughUrl = createSelector(
    [getDemoSlugs, selectNextWalkthrough],
    (demoSlugs, nextWt) => nextWt ? getWalkthroughUrl(demoSlugs, nextWt) : null
);

export const selectUrlWithoutWalkthrough = createSelector(
    [getDemoSlugs],
    (demoSlugs) => {
        const { category, demo, language } = demoSlugs;
        return createDemoWithoutWalkthroughPath({ category, demo, language });
    }
);
