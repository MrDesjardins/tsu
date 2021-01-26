namespace tsu028_2 {
  interface Server {
    ipv4: string;
    ipv6: string;
    port: number;
    https: boolean;
  }
  interface ServerOptions {
    maxUser: number;
    maxConcurrentRequests: number;
  }
  function configure(
    object: Server,
    option: ServerOptions
  ): Server {
    //...
    return object;
  }
}
