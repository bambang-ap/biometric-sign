jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({key: '', name: '', params: undefined}),
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
      dispatch: jest.fn(),
      addListener: jest.fn(),
    }),
  };
});
