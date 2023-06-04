import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/operations';
import { selectError, selectIsLoading, selectTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {isLoading && <p>Is loading...</p>}
          {error && <p>{error}</p>}
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
