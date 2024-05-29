import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon
} from '@mui/material';
import { useEffect, useState } from 'react';
import { latestProduct } from '../../utils/custFetch';

const sortedTest = (arr, initialState = []) => {
  let startPosNum = 0;
  let indexDelete;
  const result = initialState;
  arr.forEach((ele, index) => {
    if (startPosNum < ele.q) {
      startPosNum = ele.q;
      indexDelete = index;
    }
  })
  result.push(arr[indexDelete]);
  arr.splice(indexDelete, 1);
  if (arr.length > 0) {
    sortedTest(arr, result);
  }
  return result;
}

const packer = (arrIdProduct) => {
  const sortedByQuantity = arrIdProduct.reduce((acc, id) => {
    if (!acc.hasOwnProperty(id)) {
      acc[id] = 1;
    } else {
      acc[id] += 1;
    }
    return acc;
  }, {});
  const sortedByQuantityInArray = [];
  Object.entries(sortedByQuantity).forEach((ele, index) => {
    sortedByQuantityInArray.push({q: ele[1], id: ele[0]});
  });
  return sortedTest(sortedByQuantityInArray);
}

export const OverviewLatestProducts = (props) => {
  const { products = [], sx } = props;
  const [productsInfo, setProductsInfo] = useState([]);
  const [sorted, setSorted] = useState([])
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (products.length) {
      const resultSorted = packer(products);
      setSorted(resultSorted);
      latestProduct(resultSorted)
        .then(({ data }) => setProductsInfo(data))
        .catch(error => setErrorMessage(error));
    }
  }, [products]);


  return (
    <Card sx={sx}>
      <CardHeader title="Latest Products" />
      <List>
        {productsInfo.length && sorted.map((product, index) => {
          const hasDivider = index < products.length - 1;
          const quantity = product.q;
          return (
            <ListItem
              divider={hasDivider}
              key={product.id}
            >
              <ListItemAvatar>
                {
                  productsInfo[index]['url_img']
                    ? (
                      <Box
                        component="img"
                        src={productsInfo[index]['url_img']}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={productsInfo[index].title}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Total ordered ${quantity}`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestProducts.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object
};


//<List>
//         {products.map((product, index) => {
//           const hasDivider = index < products.length - 1;
//           const ago = formatDistanceToNow(product.updatedAt);
//
//           return (
//             <ListItem
//               divider={hasDivider}
//               key={product.id}
//             >
//               <ListItemAvatar>
//                 {
//                   product.image
//                     ? (
//                       <Box
//                         component="img"
//                         src={product.image}
//                         sx={{
//                           borderRadius: 1,
//                           height: 48,
//                           width: 48
//                         }}
//                       />
//                     )
//                     : (
//                       <Box
//                         sx={{
//                           borderRadius: 1,
//                           backgroundColor: 'neutral.200',
//                           height: 48,
//                           width: 48
//                         }}
//                       />
//                     )
//                 }
//               </ListItemAvatar>
//               <ListItemText
//                 primary={product.name}
//                 primaryTypographyProps={{ variant: 'subtitle1' }}
//                 secondary={`Updated ${ago} ago`}
//                 secondaryTypographyProps={{ variant: 'body2' }}
//               />
//               <IconButton edge="end">
//                 <SvgIcon>
//                   <EllipsisVerticalIcon />
//                 </SvgIcon>
//               </IconButton>
//             </ListItem>
//           );
//         })}
//       </List>