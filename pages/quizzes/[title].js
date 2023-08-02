import { Layout } from 'components';
import Quiz from 'components/Quiz';
import { capitalize } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Loader } from 'ui-kit';

export default function Quizzes(props = {}) {
  const [loading, setLoading] = useState(true);
  const [quizId, setQuizId] = useState(null);
  const [quizTitle, setQuizTitle] = useState(null);

  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    if (title) {
      //Finds quiz id from url
      const quizParams = title.split('-');
      setQuizId(quizParams[0]);

      //Finds quiz title from url
      quizParams.shift();
      const capitalTitle = quizParams.map(word => capitalize(word));
      setQuizTitle(capitalTitle.join(' '));

      setLoading(false);
    }
  }, [router]);

  /**
   * todo : Find way to listen for error when invalid title is passed
   */

  return (
    <Layout>
      {loading ? (
        <Box display="flex" width="100%" justifyContent="center" py="l">
          <Loader />
        </Box>
      ) : (
        <>
          {quizTitle && (
            <Box display="flex" width="100%" justifyContent="center" py="l">
              <Box as="h1">{quizTitle}</Box>
            </Box>
          )}
          <Quiz id={quizId} />
        </>
      )}
    </Layout>
  );
}
