
export default async function handler() {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Aptech Netlify API is working"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

