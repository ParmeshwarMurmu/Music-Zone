declare module 'jsmediatags' {
    function read(
      file: File,
      options: {
        onSuccess: (tag: { tags: { picture: { data: Uint8Array; format: string } } }) => void;
        onError: (error: any) => void;
      }
    ): void;
  
    // Add any other functions or types used in your component
  }
  
  interface Window {
    confirmationResult: firebase.auth.ConfirmationResult | undefined;
}