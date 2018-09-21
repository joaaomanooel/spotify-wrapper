const API_URL = 'https://api.spotify.com/v1';

const TOKEN_API = 'BQCLPWg5gVOVkv5FwTKtMKDQ6ItIZ5R8G32sXWes6R4XJzk0n-NEf0LKO68XikFqCDirq2OlvHfODceLMzQTUuA7rcX5S7749UPzd9bH43ZtXbJQxfdEM_Zh4f9Lo2gK4qBnNKYEwV3g1DrbF_p0IAZOK-4XdjeEUIHM7B7_c_pBb5GT3rVwdcEmmLGDcRoVphrrIOql0t-66gxp5sKvN3o5fpW4T1dHA2esdK-zCPpax3Fr6dUHpYH_utsSb2TWQzCFfxmA_Dw2RBt9qbXiU6_p6z9O9rRjJkH18cQ';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export {
  API_URL,
  HEADERS,
};
