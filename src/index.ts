import buildOutputPage from "./lib/build-output-page";
import getPages from "./lib/get-pages";

const pages = getPages();

for(const page of pages) {
    buildOutputPage(page);
}