
import { Card, CardBody,CardHeader, CardFooter, Heading, Text, Button, Link} from "@chakra-ui/react"
export default function MyCard({Title, description, details, to }) {
  return(
    <Card width="320px"  height={"100%"}>
      <CardHeader mt="2">
        <Link href={to} _hover={{ color: 'teal', textDecoration: 'none' }}>
          <Heading size="md">{Title}</Heading>
        </Link>
      </CardHeader>
      <CardBody gap="2">
        <Text>{description}</Text>

      </CardBody>
      <CardFooter backgroundColor="#e5e7e3">
        <Button
          position="absolute"
          right="2"
          bottom="2"
          _hover={{ boxShadow: 'lg' }}
          onClick={() =>alert("Sorry. Not Yet!")}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}