import { Rule as ValidationRule } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Product ID",
      type: "string",
      description: "Unique identifier for the product",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      description: "Main image of the product",
      options: {
        hotspot: true, // Enable hotspot for image focus
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image (for accessibility)",
        },
      ],
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Product title or heading",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Product rating (e.g., out of 5 stars)",
      validation: (Rule: ValidationRule) =>
        Rule.min(0).max(5).precision(1).error("Rating must be between 0 and 5."),
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      description: "Current price of the product",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "cutprice",
      title: "Cut Price",
      type: "string",
      description: "Original price before discount (if applicable)",
    },
    {
      name: "off",
      title: "Discount Percentage",
      type: "string",
      description: "Discount percentage (e.g., -40%)",
    },

    // Product Details
    {
      name: "image1",
      title: "Image 1",
      type: "image",
      description: "Additional image for the product",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image (for accessibility)",
        },
      ],
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image",
      description: "Second additional image for the product",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image (for accessibility)",
        },
      ],
    },
    {
      name: "image3",
      title: "Image 3",
      type: "image",
      description: "Third additional image for the product",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image (for accessibility)",
        },
      ],
    },
    {
      name: "image4",
      title: "Image 4",
      type: "image",
      description: "Fourth additional image for the product",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image (for accessibility)",
        },
      ],
    },

    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the product",
    },

    {
      name: "color",
      title: "Color Options",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Available color options for the product",
    },

    {
      name: "size",
      title: "Size Options",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Available size options for the product",
    },
  ],
};
