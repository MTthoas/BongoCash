from pytezos import pytezos
# https://api.ghostnet.tzkt.io/v1/contracts/KT1Kr4s3VsCcCcB2RQ8DQstGLt2sCZafGZQ4/storage
def get_profile_from_contract(private_key: str, contract_address: str) -> dict:
    """
    Fetches the profile from a Tezos smart contract.
    
    Args:
    - private_key (str): The private key of the Tezos wallet.
    - contract_address (str): The address of the Tezos smart contract.
    
    Returns:
    - dict: The result of the getProfile function call.
    """
    
    # Initialise pytezos with the provided private key
    tezos = pytezos.using(shell='https://ghostnet.smartpy.io', key=private_key)
    
    # Obtain the contract instance
    contract = tezos.contract(contract_address)
    
    # Call the getProfile function
    result = contract.getProfile().storage
    
    return result

# Example usage
private_key = 'edsk3NPR7bkky9w6DazuQtRwp9Arx4yxZDGWSqyhs7VkEPGMoDQb2w'
contract_addr = 'KT1Kr4s3VsCcCcB2RQ8DQstGLt2sCZafGZQ4'
profile = get_profile_from_contract(private_key, contract_addr)
print(profile)
