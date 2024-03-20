import * as components from "@element-plus/icons-vue";

export default {
    install: (app) => {
        for (const key in components) {
            const componentsConfig = components[key];
            app.component(componentsConfig.name,componentsConfig);
        }
    },
};