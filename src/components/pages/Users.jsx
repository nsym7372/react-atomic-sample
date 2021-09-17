import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    image: "https://source.unsplash.com/JNDoZc5FCh0",
    name: `山田太郎 - ${i}`,
    email: "123@example.com",
    phone: "000-111-3222",
    company: {
      name: "テスト株式会社"
    },
    website: "http://google.com"
  };
});

export const Users = () => {
  return (
    <Scontainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
