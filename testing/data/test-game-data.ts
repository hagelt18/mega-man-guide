import { getGames as getRealGamesData } from '../../src/common/data/data-provider';

// Game data is static data currently, so we can just reuse it for testing as is.
export const getTestGames = () => getRealGamesData();