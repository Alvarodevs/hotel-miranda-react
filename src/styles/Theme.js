import { ThemeProvider } from "styled-components";

const themeLight = {
	backgroundColor: "var(--color-greyF8)",
}

export default function Theme({children}) {
	return <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
}