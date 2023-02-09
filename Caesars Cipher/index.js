function rot13(str) {
    
    function cipher(correspondance) {
      const charCode = correspondance.charCodeAt();
      return String.fromCharCode(
        ((charCode + 13) <= 90) ? charCode + 13
          : (charCode + 13) % 90 + 64
        );
        
      }
      
    return str.replace(/[A-Z]/g, cipher);
}
    
  rot13("SERR PBQR PNZC");