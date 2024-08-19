import type { Metadata } from 'next';
import ReactQueryProviders from '@/hooks/useReactQuery';
import Providers from '@/lib/Provider';
import { pretendard } from '@/styles/localFonts.fonts';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '채우람 갤러리',
  description: 'Gallery Service',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      1234
      <ThemeProvider theme={theme}>
        <body className={pretendard.className}>
          <ReactQueryProviders>
            <Providers>
              <div className={styles.container}>
                <main className={styles.main}>{children}</main>
              </div>
            </Providers>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
