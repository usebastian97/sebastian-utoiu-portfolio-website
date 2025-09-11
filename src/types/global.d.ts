// Global TypeScript declarations for window object extensions

declare global {
  interface Window {
    openCertModal: (index: number) => void;
    closeCertModal: () => void;
  }
}

export {};
