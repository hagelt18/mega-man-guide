import React from 'react'
import { AppContextData } from '@src/common/types/types'
import { render } from '@testing-library/react-native';
import { AppContext } from '../../src/common/context/app-context';

export interface TestWrapperProps {
  appData: AppContextData;
  children?: any;
}
export const TestWrapper = (props: TestWrapperProps) => {
  const { appData, children } = props;
  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  )
}

export interface CustomRenderOptions {
  wrapperProps?: TestWrapperProps;
}

export const customRender = (ui: React.ReactElement, options?: CustomRenderOptions) =>
  render(ui, { wrapper: props => <TestWrapper {...props} {...options?.wrapperProps} />, ...options })