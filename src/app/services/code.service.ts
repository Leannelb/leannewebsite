export class CodeService {
  
    codes = [
      { name: 'Pascal Precht', slug: "code-1" },
      { name: 'Christoph Burgdorf', slug: "code-2"  },
      { name: 'Thomas Burleson', slug: "code-3" }
    ];
    
    getCodes() {
      return this.codes;  
    }
    
    getCode(slug: string) {
      return this.codes.find(contact => contact.slug == slug);
    }
  }