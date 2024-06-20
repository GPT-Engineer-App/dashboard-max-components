import { Box, Container, VStack, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { FaChartLine, FaTable, FaWpforms } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: "", email: "" });
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">Dashboard</Heading>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10} w="full">
          <GridItem>
            <Box p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h2" size="md" mb={4} display="flex" alignItems="center">
                <FaChartLine style={{ marginRight: "8px" }} /> Sales Chart
              </Heading>
              <Line data={chartData} />
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h2" size="md" mb={4} display="flex" alignItems="center">
                <FaTable style={{ marginRight: "8px" }} /> Data Table
              </Heading>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData.map((row, index) => (
                    <Tr key={index}>
                      <Td>{row.name}</Td>
                      <Td>{row.email}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h2" size="md" mb={4} display="flex" alignItems="center">
                <FaWpforms style={{ marginRight: "8px" }} /> Input Form
              </Heading>
              <form onSubmit={handleSubmit}>
                <FormControl id="name" mb={4}>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="email" mb={4}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </FormControl>
                <Button type="submit" colorScheme="teal" w="full">Submit</Button>
              </form>
            </Box>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;