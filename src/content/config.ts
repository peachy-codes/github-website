
import { defineCollection, z } from "astro:content";

const toDateString = z.preprocess((v) => {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v;
}, z.string());

const toString = z.coerce.string();

const toStringArray = z.preprocess((v) => {
  if (typeof v === "string") {
    return v.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return v;
}, z.array(z.string()).default([]));

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: toDateString,
    summary: z.string().optional(),
    tags: toStringArray,
    draft: z.boolean().default(false),
    reading_time: z.union([z.string(), z.number()]).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    timeline: toString.optional(),
    overview: z.string().optional(),
    status: z.enum(["active","archived"]).default("active"),
    stack: toStringArray,
    kpis: toStringArray,
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([])
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    role: z.string().optional(),
    org: z.string().optional(),
    date: toDateString.optional(),
    quote: z.string(),
    source: z.string().optional()
  }),
});

export const collections = { posts, projects, testimonials };
