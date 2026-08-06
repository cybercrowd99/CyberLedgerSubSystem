export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response(
      "CyberLedgerSubSystem online",
      {
        status: 200,
        headers: {
          "content-type": "text/plain"
        }
      }
    );
  }
};
