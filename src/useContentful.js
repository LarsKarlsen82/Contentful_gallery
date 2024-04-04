import { createClient } from 'contentful';

const useContentful = () => {
    const client = createClient({
        space: "v2qphgxvkqfe",
        accessToken: "_EK4B8HAXXZuDT0VWxgLneyUwsSJHsxoDxf9l_Id5Fc",
        host: "preview.contentful.com"
    });

    const getGalleries = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "Gallery",
                select: "fields",
            });

            const sanitizedEntries = entries.items.map((item) => {
                const fields = item.fields;
                const avatar = fields.avatar ? fields.avatar.fields : null; // Check if avatar field exists
                return {
                    ...fields,
                    avatar
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching galleries:", error);
            return []; // Return an empty array in case of error
        }
    };

    return { getGalleries };
};

export default useContentful;
