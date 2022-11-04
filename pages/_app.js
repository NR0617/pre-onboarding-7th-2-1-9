import CarProvider from '../src/stores/CarListProvider';
import { GlobalStyle } from '../src/styles/globals';
import CarDetail from './car/[id]';
import CarDetailProvider from '../src/stores/CarDetailProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <CarProvider>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          {getLayout(<Component {...pageProps} />)}
        </motion.div>
      </AnimatePresence>
    </CarProvider>
  );
}
const animate = {
  initial: {
    transform: `translateX(-50px)`,
    opacity: 0,
    transition: `transform 0.33s ease`,
  },
  animate: {
    transform: `translateX(0px)`,
    opacity: 1,
    transition: `transform 0.33s ease`,
  },
  exit: {
    transform: `translateX(-50px)`,
    opacity: 0,
    transition: `transform 0.33s ease`,
  },
};

CarDetail.getLayout = function getLayout(page) {
  return <CarDetailProvider>{page}</CarDetailProvider>;
};
