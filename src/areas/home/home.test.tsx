import { screen } from '@testing-library/react-native'
import { customRender } from '../../../testing/utils/test-wrapper';
import { getTestAppData } from '../../../testing/data/test-app-data';
import { Home } from './home';
import { AppContextData, Game } from '@src/common/types/types';

//TODO - find out why we get the "act(async () => ...) without await." warnings -> https://github.com/callstack/react-native-testing-library/issues/379 

describe('Home Component', () => {

  let appData: AppContextData;

  beforeEach(() => {
    appData = getTestAppData();
  })

  test('renders game list', async () => {

    customRender(<Home />, {
      wrapperProps: { appData }
    });

    const gameTiles = await screen.findAllByTestId('game-selection-tile');
    expect(gameTiles.length).toBe(6);

    expect(screen.getByTestId('heading-img')).toBeTruthy();

    // TODO Confirm button press does what we expect
    // fireEvent.press(gameTiles[0]);
  });

})