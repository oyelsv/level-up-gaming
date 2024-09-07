/*
 * Instrumentation is the process of using code to
 * integrate monitoring and logging tools into your application.
 * This allows you to track the performance and behavior of your application,
 * and to debug issues in production.
 * Or msw/node can be used for mocking API requests.
 * https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 * */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('@/lib/msw/node');

    server.listen();
  }
}
