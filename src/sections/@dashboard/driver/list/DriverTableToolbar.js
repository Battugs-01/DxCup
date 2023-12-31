import PropTypes from 'prop-types';
// @mui
import { Tooltip, IconButton, Stack, InputAdornment, TextField } from '@mui/material';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

DriverTableToolbar.propTypes = {
  onFilterModel: PropTypes.func,
  clearFilter: PropTypes.func,
  filterModel: PropTypes.object,
  setFilterModel: PropTypes.func,
  onLessOrGreaterThanCarCount: PropTypes.func,
  handleLessOrGreaterThanBalance: PropTypes.func,
  showCarCountSign: PropTypes.bool,
  showBalanceSign: PropTypes.bool,
};

// ----------------------------------------------------------------------

export default function DriverTableToolbar({ filterModel, setFilterModel, onFilterModel, clearFilter }) {
  // rendering ------------------------------------------------------------------------------------------------

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ py: 1.5, px: 1.5 }}>
      <TextField
        size="small"
        label="Нэрээр..."
        sx={{ maxWidth: 200 }}
        value={filterModel?.name}
        onChange={(e) => onFilterModel('name', e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton
              sx={{ visibility: filterModel?.name ? 'visible' : 'hidden' }}
              onClick={() => {
                setFilterModel({ ...filterModel, name: '' });
              }}
            >
              <Iconify icon={'ic:baseline-clear'} sx={{ color: 'text.disabled', width: 16, height: 16 }} />
            </IconButton>
          ),
        }}
      />

      <TextField
        size="small"
        label="Утсаар..."
        sx={{ maxWidth: 200 }}
        value={filterModel?.phone}
        onChange={(e) => onFilterModel('phone', e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton
              sx={{ visibility: filterModel?.phone ? 'visible' : 'hidden' }}
              onClick={() => {
                setFilterModel({ ...filterModel, phone: '' });
              }}
            >
              <Iconify icon={'ic:baseline-clear'} sx={{ color: 'text.disabled', width: 16, height: 16 }} />
            </IconButton>
          ),
        }}
      />

      <TextField
        size="small"
        label="АУД-ээр..."
        sx={{ maxWidth: 200 }}
        value={filterModel?.licence_plate}
        onChange={(e) => onFilterModel('licence_plate', e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton
              sx={{ visibility: filterModel?.licence_plate ? 'visible' : 'hidden' }}
              onClick={() => {
                setFilterModel({ ...filterModel, licence_plate: '' });
              }}
            >
              <Iconify icon={'ic:baseline-clear'} sx={{ color: 'text.disabled', width: 16, height: 16 }} />
            </IconButton>
          ),
        }}
      />

      <Tooltip title="Хайлт цэвэрлэх" sx={{ position: 'absolute', right: '10px' }}>
        <IconButton
          onClick={() => {
            clearFilter();
          }}
        >
          <Iconify icon={'ic:round-refresh'} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
