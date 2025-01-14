import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { headers } from 'next/headers';

// Initialize Builder with API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const urlPath = "/" + (props?.params?.page?.join("/") || "");
  
  console.log("Current domain:", domain);
  console.log("Current URL path:", urlPath);
  console.log("Builder API Key:", process.env.NEXT_PUBLIC_BUILDER_API_KEY);

  try {
    // Fetch the page content from Builder
    const page = await builder
      .get("page", {
        userAttributes: {
          urlPath: urlPath,
        },
        cachebust: true
      })
      .toPromise();

    console.log("Builder API Response:", JSON.stringify(page, null, 2));

    // If no content is found, show a more helpful message
    if (!page) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to our Publishing Portal</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                No content found for this page in Builder.io. To get started:
              </p>
              <ol className="list-decimal list-inside mt-2 text-sm text-yellow-700">
                <li>Log in to your Builder.io account</li>
                <li>Create a new page for URL path: {urlPath}</li>
                <li>Add some components to your page</li>
                <li>Publish your changes</li>
              </ol>
              <p className="mt-2 text-sm text-yellow-600">
                Domain: {domain}<br />
                API Key: {process.env.NEXT_PUBLIC_BUILDER_API_KEY?.substring(0, 6)}...
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <RenderBuilderContent model="page" content={page} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Builder content:", error);
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold text-red-900">Error Loading Page</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">
              There was an error fetching content from Builder.io. Please verify:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-red-700">
              <li>Your Builder.io API key is correct</li>
              <li>The "page" model exists in Builder.io</li>
              <li>Your preview URL is set to: {domain}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

