import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";

function colorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
}

export default colorModeSwitch;
