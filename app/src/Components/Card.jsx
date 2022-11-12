import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Dem(props) {
  return (
    <Card shadow="sm" p="xl" radius="md" withBorder m="lg"  >
      <Card.Section component="a" href="https://mantine.dev/" >
        <Image
          src={props.img}
          height={280}
          alt="Norway"
        />
      </Card.Section>

    </Card>
  );
}

export default Dem;