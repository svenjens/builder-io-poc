"use client";
import { Builder } from "@builder.io/react";
import HeaderOne from "@/components/headers/HeaderOne";
import TopNews from "@/components/homes/home-six/TopNews";
import FooterThree from "@/layouts/footers/FooterThree";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Category from "@/components/common/Category";
import Newsletter from "@/components/common/Newsletter";
import LatestPostSidebar from "@/components/common/LatestPostSidebar";
import FooterNews from "@/components/common/FooterNews";
import ScrollToTop from "@/components/common/ScrollToTop";
import ThemeToggler from "@/components/common/ThemeToggler";
import RecentPost from "@/components/homes/home-three/RecentPost";
import BlogDetailsContent from "@/components/blogs/blog-details/BlogDetailsContent";

export function registerComponents() {
  Builder.registerComponent(HeaderOne, {
    name: "HeaderOne",
    inputs: [
      { name: "logo", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "logoAlt", type: "string" },
      { name: "whiteLogo", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "whiteLogoAlt", type: "string" },
    ],
  });

  Builder.registerComponent(TopNews, {
    name: "TopNews",
    inputs: [{ name: "data", type: "object" }],
  });

  Builder.registerComponent(FooterThree, {
    name: "FooterThree",
    inputs: [],
  });

  Builder.registerComponent(RecentPost, {
    name: "RecentPost",
    inputs: [{ name: "data", type: "object" }],
  });

  Builder.registerComponent(BlogDetailsContent, {
    name: "BlogDetailsContent",
    inputs: [{ name: "data", type: "object" }],
  });

  Builder.registerComponent(Breadcrumbs, {
    name: "Breadcrumbs",
    inputs: [{ name: "page", type: "string" }],
  });

  Builder.registerComponent(Category, { name: "Category", inputs: [] });
  Builder.registerComponent(Newsletter, { name: "Newsletter", inputs: [] });
  Builder.registerComponent(LatestPostSidebar, {
    name: "LatestPostSidebar",
    inputs: [
      { name: "avatarImage", type: "file", allowedFileTypes: ["jpeg", "jpg", "png"] },
      { name: "avatarName", type: "string" },
      { name: "avatarDescription", type: "text" },
    ],
  });

  Builder.registerComponent(FooterNews, { name: "FooterNews", inputs: [] });
  Builder.registerComponent(ScrollToTop, { name: "ScrollToTop", inputs: [] });
  Builder.registerComponent(ThemeToggler, { name: "ThemeToggler", inputs: [] });
}

