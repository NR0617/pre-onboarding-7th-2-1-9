export const loadingState = {
  loading: true,
  data: null,
  error: null,
};

export const dataState = data => ({
  loading: false,
  data,
  error: null,
});

export const errorState = error => ({
  loading: false,
  data: null,
  error: error,
});
